import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js"
import { AppState } from "../AppState.js"

class GiftsServices {
    async getGifts() {
        const res = await api.get('api/gifts')
        logger.log('Getting gifts', res.data)

        const gifts = res.data.map(giftPojo => new Gift(giftPojo))

        AppState.gifts = gifts
    }

}

export const giftsServices = new GiftsServices()