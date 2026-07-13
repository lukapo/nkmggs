import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/About/AboutPage'
import { CategoriesPage } from '../pages/Categories/CategoriesPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { DonationsPage } from '../pages/Donations/DonationsPage'
import { ClubThankYouPage } from '../pages/ClubThankYou/ClubThankYouPage'
import { HomePage } from '../pages/Home/HomePage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { AppLayout } from './AppLayout'

export default function App() {
  return (
    <BrowserRouter basename="/nkmggs">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="o-nama" element={<AboutPage />} />
          <Route path="kategorije" element={<CategoriesPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="donacije" element={<DonationsPage />} />
          <Route path="klub/zahvalnica" element={<ClubThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
