import { useLocation } from 'react-router-dom';
import Header from './Header';

function ConditionalHeader() {
    const location = useLocation();
    
    // Don't show header on home page
    if (location.pathname === '/') {
        return null;
    }
    
    return <Header />;
}

export default ConditionalHeader;

