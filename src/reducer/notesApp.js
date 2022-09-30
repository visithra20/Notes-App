import { Caption } from "react-native-paper";

export const ADD_NOTE='ADD_NOTE'
export const DELETE_NOTE='DELETE_NOTE'

let noteID=0;
export function addNote(note){
    return(
        {
            type:ADD_NOTE,
            id:noteID++,
            note
        }
)
}
export function deleteNote(id){
    return(
{
    type:DELETE_NOTE,
    payload:id
    // id:noteID--,
    // note
} )
}

const initialState=[]
function notesReducer(state=initialState,action)
{
    switch (action.type){
        case ADD_NOTE:
            return[
                ...state,
                {
                    id:action.id,
                    note:action.note

                }
            ]
            case DELETE_NOTE:
                const deletenewarray=remove(state,obj=>{
                    return obj.id !=action.payload

                })
                return deletenewarray
            default :
             return state
    }
}
export default notesReducer
