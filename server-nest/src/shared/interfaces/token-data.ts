import { TokenPayload } from "./token-payload";

export interface TokenData extends TokenPayload {
  iat: number;
  exp: number;
}
