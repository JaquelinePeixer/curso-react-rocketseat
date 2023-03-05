import { ActionTypes } from "./actions"
import { produce } from "immer"

interface CyclesState {
    cycles: Cycle[],
    activeCycleId: string | null,
}

export interface Cycle {
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptDate?: Date,
    finishedDate?: Date,
}

export function cyclesReducer(state: CyclesState, action: any) {

    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id
            })

        case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
            const markCurrentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if(markCurrentCycleIndex < 0){
                return state
            } else{
                return produce(state, draft => {
                    draft.activeCycleId =  null;
                    draft.cycles[markCurrentCycleIndex].finishedDate = new Date()
                })
            }

        case ActionTypes.INTERRUPT_CURRENT_CYCLE:
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if(currentCycleIndex < 0){
                return state
            } else{
                return produce(state, draft => {
                    draft.activeCycleId =  null;
                    draft.cycles[currentCycleIndex].interruptDate = new Date()
                })
            }

        default:
            return state
    }


}