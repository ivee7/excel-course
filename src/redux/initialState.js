import {storage} from '@core/utils'

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // {'0:1': 'fewfew'}
    currentText: '',
}

export const initialState = storage('excel-state')
    ? storage('excel-state')
    : defaultState