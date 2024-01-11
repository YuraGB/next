import { render, screen } from '@testing-library/react'
import TaleAdminItem from '@/app/[locale]/admin/components/adminDashboardTabs/modules/fairyTalesTab/components/taleItem/taleListItem'

describe('Tale item Dashboard', () => {
  it('show null if there is no data ', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TaleAdminItem tale={null} onEdit={() => {}} />) //ARRANGE

    //ACT
    const elem: HTMLDivElement | null = screen.queryByText('Category: ')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).not.toBeInTheDocument() //ASSERT
  })

  it('Show the tale item', () => {
    const dummyTaleItem = {
      id: '1',
      title: 'title',
      forAge: '1-3',
      createdAt: new Date(),
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<TaleAdminItem tale={dummyTaleItem} onEdit={() => {}} />) //ARRANGE

    const elem: HTMLDivElement | null = screen.queryByText('Category: 1-3')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(elem).toBeInTheDocument() //ASSERT
  })
})
