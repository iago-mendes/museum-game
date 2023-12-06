import { Container } from '../../styles/ThemedComponents'
import { usePlayer } from '../../contexts/Player'
import { Button } from 'react-native'

export default function MoreScreen() {
  const {reset} = usePlayer()

  return (
    <Container>
      <Button title="Reset game" onPress={() => reset()} />
    </Container>
  )
}
