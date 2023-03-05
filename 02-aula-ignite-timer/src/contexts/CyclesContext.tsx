import { differenceInSeconds } from "date-fns"
import { createContext, ReactNode, useState, useReducer, useEffect } from "react"
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"

interface CreateCycleData {
    task: string,
    minutesAmount: number
}

interface CyclesContextType {
    activeCycle: Cycle | undefined,
    activeCycleId: string | null,
    amountSecondsPassed: number,
    cycles: Cycle[],
    markCurrentAsFinished: () => void,
    setSecondsPassed: (seconds: number) => void,
    createNewCycle: (data: CreateCycleData) => void,
    interruptCurrentCycle: () => void,
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {

    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null,
    }, (initialState) => {
        const storageStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

        if (storageStateAsJSON) {
            return JSON.parse(storageStateAsJSON)
        }

        return initialState
    })

    const { cycles, activeCycleId } = cyclesState

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    useEffect(() => {
        const stateJson = JSON.stringify(cyclesState)
        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJson)
    }, [cyclesState])




    function markCurrentAsFinished() {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{ activeCycle, activeCycleId, markCurrentAsFinished, amountSecondsPassed, setSecondsPassed, createNewCycle, interruptCurrentCycle, cycles }} >
            {children}
        </CyclesContext.Provider>
    )
}