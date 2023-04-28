
import React, { useState } from 'react'
import { API } from 'aws-amplify'
const usePayment = () => {

    const onCreatePaymentIntent = async ({ amount }) => {
        const api = "api-gateway-dev"
        const path = '/paymentIntent';
        const params = {
            headers: {},
            body: {
                amount: amount,
            }
        };
        try {
            const response = await API.post(api, path, params);
            const { secret } = response
            return secret
        } catch (error) {
            return {
                error: error
            }
        }
    }

    return [
        onCreatePaymentIntent
    ]
}

export default usePayment
