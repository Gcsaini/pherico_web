export const EmailJsServiceId = "service_73m3ekj";
export const EmailJsPublicId = "lWRl4BbRCgHM0JqEn";
export const MailTemplateID = "template_0vdwtl7";

export const validateEmail = (email) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return false;
  } else {
    return true;
  }
};
