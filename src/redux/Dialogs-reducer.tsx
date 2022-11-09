import {ActionsType, DialogType, MessageType} from "./store";

const initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Priv'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'By'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Semen'},
        {id: 3, name: 'Vika'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Denis'},
    ] as Array<DialogType>
}

export type initialStateTypeDialogs = typeof initialState

export const dialogsReducer = (state = initialState, action: ActionsType): initialStateTypeDialogs => {


    switch (action.type) {

        case 'SEND_MESSAGE':
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }

}