import { render} from '@testing-library/vue'
import Counter from './Counter.vue'

test('載入時title [當前點擊次數0]',()=>{
  const { getByTestId  } = render(Counter)
  const title = getByTestId('counterId')
  expect(title.innerHTML).toBe('當前點擊次數0')
}) 