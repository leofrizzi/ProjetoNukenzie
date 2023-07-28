import { useState } from 'react'
import { FormCard } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { FinancialSummary } from './components/FinancialSummary/FinancialSummary'
import { TotalValue } from './components/TotalValue/TotalValue'
import { ResetCss } from './styles/reset'
import { GlobalStyles } from './styles/globalStyles'
import { DivMain } from './styles/generalStyles'

function App() {
  const [summary, setSummaryList] = useState([])

  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Header />
      <main>
        <DivMain>
          <div>
            <FormCard setSummaryList={setSummaryList} />
            <TotalValue summaryList={summary} />
          </div>
          <div>
            <FinancialSummary summaryList={summary} setSummaryList={setSummaryList} />
          </div>
        </DivMain>
      </main>
    </>
  )
}

export default App