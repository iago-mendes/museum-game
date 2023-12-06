import { Container } from '../../styles/ThemedComponents'
import { usePlayer } from '../../contexts/Player'
import { Button } from 'react-native'
import { ButtonWithIcon } from '../../components/ButtonWIthIcon'

export default function MoreScreen() {
  const {reset} = usePlayer()

  return (
    <Container>
      <ButtonWithIcon text="Reset game" icon="refresh" onPress={() => reset()} />
    </Container>
  )
}
