import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HomeContainer, StartCountdownButton, StopCountdownButton, } from './styles'
import { NewCycleForm } from './components/NewCycleForm/NewCycleForm'
import { Countdown } from './components/Countdown/Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

    const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: newCycleFormData){
        createNewCycle(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} /> Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} /> Começar
                    </StartCountdownButton>
                )}


            </form>

        </HomeContainer>
    )
}