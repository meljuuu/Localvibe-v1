/* eslint-disable prettier/prettier */
import axios from 'axios';
import { URI } from '../URI';
import { Dispatch } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create pin
export const createPinAction =
  (
    createdBy: object,
    businessName: string,
    description: string,
    category: string,
    latitude: number,
    longitude: number,
    contactInfo: { phone?: string; email?: string; website?: string },
    image: string,
    operatingHours: {
      monday: { open: string; close: string };
      tuesday: { open: string; close: string } /*...*/;
    }, // Correct field name
  ) =>
    async (dispatch: Dispatch<any>) => {
      try {
        console.log('Creating pin with the following details:');
        console.log('Created By:', createdBy);
        console.log('Business Name:', businessName);
        console.log('Description:', description);
        console.log('Category:', category);
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
        console.log('Contact Info:', contactInfo);
        console.log('Image:', image);
        console.log('Operating Hours:', operatingHours); // Correct field to log

        dispatch({
          type: 'pinCreateRequest',
        });

        const token = await AsyncStorage.getItem('token');

        const { data } = await axios.post(
          `${URI}/create-pin`,
          {
            createdBy,
            businessName,
            description,
            category,
            latitude,
            longitude,
            contactInfo,
            image,
            operatingHours, // Send the correct operatingHours here
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        dispatch({
          type: 'pinCreateSuccess',
          payload: data.pin,
        });
      } catch (error: any) {
        dispatch({
          type: 'pinCreateFailed',
          payload: error.response.data.message,
        });
      }
    };

export const modifyPinAction =
  (
    pinId: string,
    businessName: string,
    description: string,
    category: string,
    latitude: number,
    longitude: number,
    contactInfo: { phone?: string; email?: string; website?: string },
    image: string,
    openingHours: string, // Add openingHours here
  ) =>
    async (dispatch: Dispatch<any>) => {
      try {
        dispatch({
          type: 'pinModifyRequest',
        });

        const token = await AsyncStorage.getItem('token');
        console.log('Token Retrieved:', token);

        const requestData = {
          businessName,
          description,
          category,
          latitude,
          longitude,
          contactInfo,
          image,
          openingHours,
        };

        console.log('Sending Request to Update Pin:', requestData);

        const { data } = await axios.put(
          `${URI}/update-pin/${pinId}`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log('Server Response:', data);

        dispatch({
          type: 'pinModifySuccess',
          payload: data.pin,
        });

        console.log('Dispatch Success: Pin updated successfully');
      } catch (error: any) {
        console.error(
          'Error Updating Pin:',
          error.response?.data || error.message,
        );

        dispatch({
          type: 'pinModifyFailed',
          payload: error.response?.data?.message || 'Unknown error occurred',
        });
      }
    };

// get all pins
export const getAllPins = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: 'getAllPinsRequest',
    });

    const token = await AsyncStorage.getItem('token');

    const { data } = await axios.get(`${URI}/get-all-pins`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: 'getAllPinsSuccess',
      payload: data.pins,
    });
  } catch (error: any) {
    dispatch({
      type: 'getAllPinsFailed',
      payload: error.response.data.message,
    });
  }
};

export const deletePinAction =
  (pinId: string) => async (dispatch: Dispatch<any>) => {
    console.log('trying to delete pin');

    try {
      dispatch({
        type: 'pinDeleteRequest',
      });

      const token = await AsyncStorage.getItem('token');

      await axios.delete(`${URI}/delete-pin/${pinId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: 'pinDeleteSuccess',
        payload: pinId,
      });
    } catch (error: any) {
      dispatch({
        type: 'pinDeleteFailed',
        payload: error.response.data.message,
      });
    }
  };

export const addReviewAction =
  (
    pinId: string,
    reviewData: {
      userId: string;
      name: string;
      image: string;
      reviewText: string;
      ratings: number;
    },
  ) =>
    async (dispatch: Dispatch<any>) => {
      try {
        dispatch({ type: "addReviewRequest" });

        if (!reviewData.name || !reviewData.image || !pinId) {
          throw new Error("User name, image, and pin ID are required");
        }

        const token = await AsyncStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const { data } = await axios.post(
          `${URI}/add-review`,
          {
            pinId,
            userId: reviewData.userId,
            name: reviewData.name,
            image: reviewData.image,
            reviewText: reviewData.reviewText,
            ratings: reviewData.ratings,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        dispatch({ type: "addReviewSuccess", payload: data.pin });
      } catch (error: any) {
        console.error("Error in addReviewAction:", {
          message: error.response?.data?.message || error.message,
          status: error.response?.status,
          data: error.response?.data,
        });

        dispatch({
          type: "addReviewFailed",
          payload: error.response?.data?.message || error.message,
        });
      }
    };


export const modifyReviewAction =
  (
    pinId: string,
    reviewId: string,
    reviewData: {
      userId: string;
      name: string;
      image: string;
      reviewText: string;
      ratings: number;
    },
  ) =>
    async (dispatch: Dispatch<any>) => {
      try {
        dispatch({ type: 'modifyReviewRequest' });

        const token = await AsyncStorage.getItem('token');

        const { data } = await axios.put(
          `${URI}/modify-review`,
          {
            pinId,
            reviewId,
            userId: reviewData.userId, // Ensures correct userId is passed
            reviewText: reviewData.reviewText,
            ratings: reviewData.ratings,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        dispatch({
          type: 'modifyReviewSuccess',
          payload: data.pin, // Updated pin with modified review
        });
      } catch (error: any) {
        console.error(
          'Modify review error:',
          error.response?.data || error.message,
        );
        dispatch({
          type: 'modifyReviewFailed',
          payload: error.response?.data?.message || 'An error occurred',
        });
      }
    };



// Delete Review
export const deleteReviewAction =
  (pinId: string, reviewId: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({ type: 'deleteReviewRequest' });

      const token = await AsyncStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found');
      }

      console.log('Attempting to delete review:', { pinId, reviewId });

      const { data } = await axios.delete(`${URI}/delete-review`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { pinId, reviewId },
      });

      console.log('Delete review response:', data);

      dispatch({
        type: 'deleteReviewSuccess',
        payload: data.pin,
      });
    } catch (error: any) {
      console.error(
        'Error during deleteReviewAction:',
        error.response?.data?.message || error.message,
      );
      dispatch({
        type: 'deleteReviewFailed',
        payload:
          error.response?.data?.message || 'An unexpected error occurred.',
      });
    }
  };


// Increment Visit Count

// Add Visit Action
export const addVisitorAction = (pinId: string, userId: string) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: 'addVisitorRequest' });

    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    console.log('Attempting to add visitor:', { pinId, userId });

    const { data } = await axios.post(`${URI}/add-visitor`, {
      pinId,
      userId,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Add visitor response:', data);

    dispatch({
      type: 'addVisitorSuccess',
      payload: data.visitors,
    });
  } catch (error: any) {
    console.error(
      'Error during addVisitor action:',
      error.response?.data?.message || error.message,
    );
    dispatch({
      type: 'addVisitorFailed',
      payload: error.response?.data?.message || 'An unexpected error occurred.',
    });
  }
};


// Get Pin by ID Action
export const getPinByIdAction =
  (pinId: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: 'getPinByIdRequest',
      });

      const token = await AsyncStorage.getItem('token');

      const { data } = await axios.get(`${URI}/get-pin/${pinId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: 'getPinByIdSuccess',
        payload: data.pin,
      });
    } catch (error: any) {
      dispatch({
        type: 'getPinByIdFailed',
        payload: error.response.data.message,
      });
    }
  };

// Action to fetch all pins
export const fetchAllPinsAction = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({ type: 'getAllPinsRequest' });

    const token = await AsyncStorage.getItem('token');

    const { data } = await axios.get(`${URI}/get-all-pins`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: 'getAllPinsSuccess',
      payload: data.pins,
    });
  } catch (error: any) {
    dispatch({
      type: 'getAllPinsFailed',
      payload: error.response?.data?.message || 'Failed to fetch pins',
    });
  }
};
