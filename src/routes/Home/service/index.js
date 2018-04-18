import request from '../../../utils/request'

export async function getNum (params) {
    return request(`${window.dataUrl}/extra/notice/list`, {
        method: 'POST',
        body: params
    })
}