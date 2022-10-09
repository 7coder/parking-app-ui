import { getRq, postReq } from "@/helpers/http";
import { PERMITS_URL } from "@/config/constants";

export const savePermit = (permit) => postReq(PERMITS_URL, permit);
export const findPermitsByQuery = (query) => getRq(`${PERMITS_URL}?${query}`);
export const getAllPermits = () => getRq(`${PERMITS_URL}`);
