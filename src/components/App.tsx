import { useAppState } from './AppStateContext'
import { Column } from './Column'
import { AddNewItem } from './AddNewItem'
import { AppContainer } from '../styles'

export const App = () => {
    const { state, dispatch } = useAppState()

    return (
        <AppContainer>
            {state.lists.map((list, i) => (
                <Column text={list.text} key={list.id} index={i} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
            />
        </AppContainer>
    )
}
