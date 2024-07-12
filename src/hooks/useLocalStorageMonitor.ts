import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToken } from "../store/slices/tokenSlice";
import { resetUser } from "../store/slices/userSlice";
import { resetPerson } from "../store/slices/personSlice";

const useLocalStorageMonitor = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'persist:root') {
                const persistedState = JSON.parse(event.newValue || '{}');
                const newToken = persistedState?.auth?.token;
                if (!newToken) {
                    dispatch(resetToken());
                    dispatch(resetUser())
                    dispatch(resetPerson())
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [dispatch]);
}
export default useLocalStorageMonitor