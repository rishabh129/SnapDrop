import { Routes, Route } from 'react-router-dom';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';
const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Routes - anyone can access*/}

                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>

                {/* Private Routes - only signed in users can access*/}

                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>

            </Routes>
        </main>
    )
}

export default App