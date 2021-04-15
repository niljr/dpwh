import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import routes from '../../config/routes';
import AppLoadingContainer from '../AppLoading/AppLoadingContainer';
import AppModal from '../../components/base/Modal/Modal';
import FlashNotification from '../../components/modules/FlashNotification/FlashNotification';
import SearchContract from '../../components/modules/SearchContract/SearchContract';
import ContractInformation from '../../components/modules/ContractInformation/ContractInformation';
import CollapsibleSidebar from '../../components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import Navbar from '../../components/base/Navbar/Navbar';
import { clearModalContent } from '../../redux/modules/modalEvent';

const loading = () => (
    <div className='flex-centered h-100'>
        <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
        </Spinner>
    </div>
);

function App() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { modalContent, onToggle, ...modalEvent } = useSelector(({ modalEvent }) => modalEvent);
    const { isAuthed } = useSelector(({ authentication }) => authentication);

    const handleCloseModal = () => {
        dispatch(clearModalContent());
        onToggle && onToggle();

        // To show modal, do this something like this:
        // dispatch(setModalContent({
        //     modalContent: <LoginContainer />,
        //     title: 'Login'
        // }));
    };

    return (
        <AppLoadingContainer>
            <React.Suspense fallback={loading()}>

                <div id='outer-container'>
                    {pathname.includes('management') && (
                        <CollapsibleSidebar className='p-2'>
                            <SearchContract />
                            <ContractInformation />
                        </CollapsibleSidebar>
                    )}

                    <div className='w-100'>
                        {isAuthed && (
                            <Navbar />
                        )}
                        <div id='page-wrap'>
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </React.Suspense>

            <FlashNotification/>
            <AppModal
                {...modalEvent}
                isShow={!!modalContent}
                onToggle={handleCloseModal}>
                {modalContent}
            </AppModal>
        </AppLoadingContainer>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )} />
    );
}

export { RouteWithSubRoutes };

export default App;
