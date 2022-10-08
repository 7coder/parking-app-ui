import { postReq } from "@/helpers/http";
import { PERMIT_SAVE_URL } from "@/config/constants";

export const savePermit = (permit) => postReq(PERMIT_SAVE_URL, permit);
