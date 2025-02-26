export const verificationTokenEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LocalVibe Verification Code</title>
</head>
<body style="font-family: 'Roboto', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="height: 100%;">
        <tr>
            <td align="center" valign="middle">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="background-color: #ffffff; padding: 30px 20px; text-align: center;">

                            <img src="https://i.ibb.co/Tx4wD6X6/ate.png" alt="LocalVibe Logo" style="max-width: 180px; height: auto; display: block; margin: 0 auto;">
                        </td>

                    </tr>
                    <tr>
                        <td style="padding: 40px 30px; text-align: center;">
                            <h2 style="font-size: 24px; font-weight: 600; color: #017E5E; margin-bottom: 20px;">Verify Your Email</h2>
                            <p style="font-size: 16px; color: #555; margin-bottom: 30px; line-height: 1.6;">
                                Thank you for signing up with LocalVibe! To complete your registration, please use the following verification code:
                            </p>
                            <div style="background-color: #f4f4f4; padding: 20px; font-size: 28px; font-weight: 700; color: #017E5E; border-radius: 8px; margin: 20px 0; display: inline-block; letter-spacing: 4px;">
                                {verificationToken}
                            </div>
                            <p style="font-size: 14px; color: #777; margin-top: 20px;">
                                This code will expire in <strong>10 minutes</strong>. If you didn't request this, please ignore this email.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top: 1px solid #e0e0e0; padding: 20px 30px; text-align: center;">
                            <p style="font-size: 14px; color: #777; margin: 0;">
                                Need help? <a href="mailto:mail.localvibe@gmail.com" style="color: #017E5E; text-decoration: none; font-weight: 500;">Contact us.</a>.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; padding: 20px; font-size: 12px; color: #999; background-color: #f9f9f9;">
                            <p style="margin: 0;">&copy; 2024 LocalVibe. All rights reserved.</p>
                            <p style="margin: 5px 0 0;">You are receiving this email because you signed up for LocalVibe.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t46{padding:0 0 22px!important}.t14,.t37,.t48,.t64{width:480px!important}.t31,.t42,.t58,.t8{text-align:center!important}.t30,.t41,.t57,.t7{vertical-align:top!important;width:600px!important}.t5{border-top-left-radius:0!important;border-top-right-radius:0!important;padding:20px 30px!important}.t28{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important;padding:30px!important}.t66{mso-line-height-alt:20px!important;line-height:20px!important}.t53{width:380px!important}.t3{width:44px!important}.t25{width:420px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t69" style="min-width:100%;Margin:0px;padding:0px;background-color:#E0E0E0;"><div class="t68" style="background-color:#E0E0E0;"><table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t67" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#E0E0E0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#E0E0E0"/>
</v:background>
<![endif]-->
<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t49" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="566" class="t48" style="width:566px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t48" style="width:566px;">
<!--<![endif]-->
<table class="t47" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46" style="padding:50px 10px 31px 10px;"><div class="t45" style="width:100%;text-align:center;"><div class="t44" style="display:inline-block;"><table class="t43" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t42"><td></td><td class="t41" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t40" style="width:100%;"><tr><td class="t39" style="background-color:transparent;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t15" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t14" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t14" style="width:546px;">
<!--<![endif]-->
<table class="t13" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t12"><div class="t11" style="width:100%;text-align:center;"><div class="t10" style="display:inline-block;"><table class="t9" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t8"><td></td><td class="t7" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t6" style="width:100%;"><tr><td class="t5" style="overflow:hidden;background-color:#FFFFFF;padding:49px 50px 42px 50px;border-radius:18px 18px 0 0;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="85" class="t3" style="width:85px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="width:85px;">
<!--<![endif]-->
<table class="t2" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="85" height="85" alt="" src="https://i.ibb.co/WvKKmkG5/377284739-1742421982862767-3947049367661284607-n.png"/></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t38" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t37" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t37" style="width:546px;">
<!--<![endif]-->
<table class="t36" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t35"><div class="t34" style="width:100%;text-align:center;"><div class="t33" style="display:inline-block;"><table class="t32" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t31"><td></td><td class="t30" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t29" style="width:100%;"><tr><td class="t28" style="overflow:hidden;background-color:#34B591;padding:40px 50px 40px 50px;border-radius:0 0 18px 18px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t20" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="410" class="t19" style="width:410px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t19" style="width:410px;">
<!--<![endif]-->
<table class="t18" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t17"><h1 class="t16" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:30px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">WELCOME TO LOCALVIBE</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t21" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t26" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="446" class="t25" style="width:446px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t25" style="width:446px;">
<!--<![endif]-->
<table class="t24" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t23"><p class="t22" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">We are thrilled to welcome you to LocalVibe! We&#39;re excited to have you as part of our community, and we look forward to providing you with the best experience possible.&nbsp; If you have any questions or need assistance, please don&#39;t hesitate to reach out to us. We&#39;re here to help!&nbsp; Thank you for joining us, and we can&#39;t wait to see what we can achieve together.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t27" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t65" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t64" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t64" style="width:600px;">
<!--<![endif]-->
<table class="t63" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><div class="t61" style="width:100%;text-align:center;"><div class="t60" style="display:inline-block;"><table class="t59" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t58"><td></td><td class="t57" width="600" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t56" style="width:100%;"><tr><td class="t55" style="padding:0 50px 0 50px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t54" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="420" class="t53" style="width:420px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t53" style="width:420px;">
<!--<![endif]-->
<table class="t52" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t51"><p class="t50" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#595959;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">© 2025 LocalVibe. All Rights Reserved<br/></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`;


export const FORGOT_PASSWORD_EMAIL_TEMPLATE = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t57{padding:0 0 22px!important}.t14,.t48,.t59,.t75{width:480px!important}.t42,.t53,.t69,.t8{text-align:center!important}.t41,.t52,.t68,.t7{vertical-align:top!important;width:600px!important}.t5{border-top-left-radius:0!important;border-top-right-radius:0!important;padding:20px 30px!important}.t39{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important;padding:30px!important}.t77{mso-line-height-alt:20px!important;line-height:20px!important}.t64{width:380px!important}.t3{width:44px!important}.t25,.t37{width:420px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t80" style="min-width:100%;Margin:0px;padding:0px;background-color:#E0E0E0;"><div class="t79" style="background-color:#E0E0E0;"><table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t78" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#E0E0E0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#E0E0E0"/>
</v:background>
<![endif]-->
<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t60" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="566" class="t59" style="width:566px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t59" style="width:566px;">
<!--<![endif]-->
<table class="t58" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t57" style="padding:50px 10px 31px 10px;"><div class="t56" style="width:100%;text-align:center;"><div class="t55" style="display:inline-block;"><table class="t54" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t53"><td></td><td class="t52" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t51" style="width:100%;"><tr><td class="t50" style="background-color:transparent;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t15" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t14" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t14" style="width:546px;">
<!--<![endif]-->
<table class="t13" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t12"><div class="t11" style="width:100%;text-align:center;"><div class="t10" style="display:inline-block;"><table class="t9" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t8"><td></td><td class="t7" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t6" style="width:100%;"><tr><td class="t5" style="overflow:hidden;background-color:#FFFFFF;padding:49px 50px 42px 50px;border-radius:18px 18px 0 0;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="85" class="t3" style="width:85px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="width:85px;">
<!--<![endif]-->
<table class="t2" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="85" height="85" alt="" src="https://i.ibb.co/WvKKmkG5/377284739-1742421982862767-3947049367661284607-n.png"/></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t49" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t48" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t48" style="width:546px;">
<!--<![endif]-->
<table class="t47" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46"><div class="t45" style="width:100%;text-align:center;"><div class="t44" style="display:inline-block;"><table class="t43" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t42"><td></td><td class="t41" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t40" style="width:100%;"><tr><td class="t39" style="overflow:hidden;background-color:#34B591;padding:40px 50px 40px 50px;border-radius:0 0 18px 18px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t20" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="381" class="t19" style="width:381px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t19" style="width:381px;">
<!--<![endif]-->
<table class="t18" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t17"><h1 class="t16" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:30px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Forgot your password?<br/>It happens to the best of us.</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t21" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t26" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="446" class="t25" style="width:446px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t25" style="width:446px;">
<!--<![endif]-->
<table class="t24" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t23"><p class="t22" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">To reset your password, enter the 6 digit number to you LocalVibe App.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t27" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t32" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="381" class="t31" style="width:381px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t31" style="width:381px;">
<!--<![endif]-->
<table class="t30" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t29"><h1 class="t28" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:30px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{verificationToken}</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t33" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t38" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="446" class="t37" style="width:446px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t37" style="width:446px;">
<!--<![endif]-->
<table class="t36" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t35"><p class="t34" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you have any questions or need further assistance, please do not hesitate to contact our support team by replying to this email.</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t76" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t75" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t75" style="width:600px;">
<!--<![endif]-->
<table class="t74" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t73"><div class="t72" style="width:100%;text-align:center;"><div class="t71" style="display:inline-block;"><table class="t70" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t69"><td></td><td class="t68" width="600" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t67" style="width:100%;"><tr><td class="t66" style="padding:0 50px 0 50px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t65" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="420" class="t64" style="width:420px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t64" style="width:420px;">
<!--<![endif]-->
<table class="t63" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t62"><p class="t61" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#595959;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">© 2025 LocalVibe. All Rights Reserved<br/></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t77" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`



export const RESET_PASSWORD_EMAIL_TEMPLATE = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t51{padding:0 0 22px!important}.t14,.t42,.t53,.t69{width:480px!important}.t36,.t47,.t63,.t8{text-align:center!important}.t35,.t46,.t62,.t7{vertical-align:top!important;width:600px!important}.t5{border-top-left-radius:0!important;border-top-right-radius:0!important;padding:20px 30px!important}.t33{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important;padding:30px!important}.t71{mso-line-height-alt:20px!important;line-height:20px!important}.t58{width:380px!important}.t3{width:44px!important}.t25,.t31{width:420px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;800&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t74" style="min-width:100%;Margin:0px;padding:0px;background-color:#E0E0E0;"><div class="t73" style="background-color:#E0E0E0;"><table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t72" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#E0E0E0;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#E0E0E0"/>
</v:background>
<![endif]-->
<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t54" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="566" class="t53" style="width:566px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t53" style="width:566px;">
<!--<![endif]-->
<table class="t52" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t51" style="padding:50px 10px 31px 10px;"><div class="t50" style="width:100%;text-align:center;"><div class="t49" style="display:inline-block;"><table class="t48" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t47"><td></td><td class="t46" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t45" style="width:100%;"><tr><td class="t44" style="background-color:transparent;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t15" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t14" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t14" style="width:546px;">
<!--<![endif]-->
<table class="t13" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t12"><div class="t11" style="width:100%;text-align:center;"><div class="t10" style="display:inline-block;"><table class="t9" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t8"><td></td><td class="t7" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t6" style="width:100%;"><tr><td class="t5" style="overflow:hidden;background-color:#FFFFFF;padding:49px 50px 42px 50px;border-radius:18px 18px 0 0;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="85" class="t3" style="width:85px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t3" style="width:85px;">
<!--<![endif]-->
<table class="t2" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="85" height="85" alt="" src="https://i.ibb.co/WvKKmkG5/377284739-1742421982862767-3947049367661284607-n.png"/></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t43" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="546" class="t42" style="width:546px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t42" style="width:546px;">
<!--<![endif]-->
<table class="t41" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t40"><div class="t39" style="width:100%;text-align:center;"><div class="t38" style="display:inline-block;"><table class="t37" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t36"><td></td><td class="t35" width="546" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t34" style="width:100%;"><tr><td class="t33" style="overflow:hidden;background-color:#34B591;padding:40px 50px 40px 50px;border-radius:0 0 18px 18px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t20" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="410" class="t19" style="width:410px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t19" style="width:410px;">
<!--<![endif]-->
<table class="t18" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t17"><h1 class="t16" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:41px;font-weight:800;font-style:normal;font-size:30px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Password Successfully Changed</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t21" style="mso-line-height-rule:exactly;mso-line-height-alt:25px;line-height:25px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t26" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="446" class="t25" style="width:446px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t25" style="width:446px;">
<!--<![endif]-->
<table class="t24" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t23"><p class="t22" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you did not request this change, please reply to this email immediately to secure your account.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t27" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t32" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr>
<!--[if mso]>
<td width="446" class="t31" style="width:446px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t31" style="width:446px;">
<!--<![endif]-->
<table class="t30" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t29"><p class="t28" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you have any questions or need further assistance, please do not hesitate to contact our support team by replying to this email.</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t70" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="600" class="t69" style="width:600px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t69" style="width:600px;">
<!--<![endif]-->
<table class="t68" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t67"><div class="t66" style="width:100%;text-align:center;"><div class="t65" style="display:inline-block;"><table class="t64" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t63"><td></td><td class="t62" width="600" valign="top">
<table width="100%" cellpadding="0" cellspacing="0" class="t61" style="width:100%;"><tr><td class="t60" style="padding:0 50px 0 50px;"><table width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t59" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr>
<!--[if mso]>
<td width="420" class="t58" style="width:420px;">
<![endif]-->
<!--[if !mso]>-->
<td class="t58" style="width:420px;">
<!--<![endif]-->
<table class="t57" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><p class="t55" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#595959;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">© 2025 LocalVibe. All Rights Reserved<br/></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t71" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`