import { apiPost } from "./apiUtils";
import {
  PostSendEmailConfirmData,
  PostSendPasswordChangeEmailData,
  PostSignInData,
  PostSignUpData,
  PostVerifyCodeData,
} from "./types/accounts";

export const postSendEmailConfirm = async (data: PostSendEmailConfirmData) => {
  return apiPost("/accounts/sendEmailConfirm", data);
};

export const postVerifyCode = async (data: PostVerifyCodeData) => {
  return apiPost("/accounts/verifyCode", data);
};

export const postSignUp = async (data: PostSignUpData) => {
  return apiPost("/accounts/signUp", data);
};

export const postSignIn = async (data: PostSignInData) => {
  return apiPost("/accounts/signIn", data);
};

export const postSendPasswordChangeEmail = async (
  data: PostSendPasswordChangeEmailData,
) => {
  return apiPost("/accounts/sendPasswordChangeEmail", data);
};
