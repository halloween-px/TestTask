import MainLayout from '../components/layouts/MainLayout';
import { MainProvaider } from '../components/context/MainContext';
import '../scss/app.scss'

export default function App({ Component, propsPage }) {
    return (
        <MainProvaider>
            <MainLayout>
                <Component {...propsPage} />
            </MainLayout>
        </MainProvaider>
    )
}