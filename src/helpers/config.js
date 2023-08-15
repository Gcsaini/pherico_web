export const EmailJsServiceId = "service_b0788os";
export const EmailJsPublicId = "knV3yfEgCC5UhVDga";
export const MailTemplateID = "template_mvzlbi5";
export const MailTemplateIDSeller = "template_mqejn8s";

export const validateEmail = (email) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return false;
  } else {
    return true;
  }
};
