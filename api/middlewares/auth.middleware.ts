import { NextApiRequest, NextApiResponse } from "next";
import { MiddlewareOutput } from ".";
import { verify } from "../../libs/jwt";
import { AccessTokenBody, AuthenticationObject } from "../types/auth.response";
import { createResponse } from "../types/response";

export const AuthMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse
): MiddlewareOutput<AccessTokenBody> => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send(createResponse(false, "Unauthorized", {}));
    return {
      success: false,
      payload: { accessToken: "", scope: "", clientId: "", uid: "" },
    };
  }
  const token = authorization.split(" ")[1];

  const [success, payload, error] = verify(token);
  if (!success) {
    res.status(401).send(createResponse(false, `Unauthorized: ${error}`, {}));
    return {
      success: false,
      payload: { accessToken: "", scope: "", clientId: "", uid: "" },
      error: error,
    };
  }
  let output: AccessTokenBody = {
    accessToken: "",
    scope: "",
    clientId: "",
    uid: "",
  };
  output.accessToken = payload?.accessToken;
  output.scope = payload?.scope;
  output.clientId = payload?.clientId;
  output.uid = payload?.uid;
  return { success: true, payload: output, error };
};
