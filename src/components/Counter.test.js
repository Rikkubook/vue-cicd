import { render, fireEvent} from '@testing-library/vue'
import Counter from './Counter.vue'

test('載入時title [當前點擊次數0]',()=>{
  const { getByTestId } = render(Counter)
  const title = getByTestId('counterId')
  expect(title.innerHTML).toBe('當前點擊次數0')
}) 

test('click [當前點擊次數1]', async()=>{
  const { getByTestId, getByText } = render(Counter)

  const incrementButton = getByText('點我加1') // 拿到文字為
  await fireEvent.click(incrementButton) // 要改成非同步點擊
  const title = getByTestId('counterId')
  expect(title.innerHTML).toBe('當前點擊次1') // 確認
}) 