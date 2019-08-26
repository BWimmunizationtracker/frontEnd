import React from 'react'

export const initialState = {
    name: '',
    birthday: '',
    gender: '',
    location: '',
    vaccines: [{name: '', age: '', recommendedDate: '', completed: false}],
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        default:
        return state
    }
}