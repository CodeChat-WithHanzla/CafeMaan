import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const AdminContext = createContext()
const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '')
    const [menus, setMenus] = useState([])
    const [orders, setOrders] = useState([])
    const BackendUrl = import.meta.env.VITE_BACKEND_URL
    const getAllMenus = async () => {
        try {
            const { data, status } = await axios.get(`${BackendUrl}/admin/menus`, { headers: { Authorization: `Bearer ${aToken}` } })
            if (status === 200)
                setMenus(data)
            console.log(data);

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    }
    const addMenu = async (menu) => {
        try {
            if (!aToken) {
                return toast.error("Authentication token is missing!");
            }

            const { status } = await axios.post(`${BackendUrl}/admin/menus`, menu, {
                headers: {
                    Authorization: `Bearer ${aToken}`
                }
            });

            console.log(status);

            if (status === 201) {
                toast.success("Menu added successfully.");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    };

    const updateMenu = async (id, menu) => {
        try {
            const { status } = await axios.put(
                `${BackendUrl}/admin/menus/${id}`,  // Use PUT for updates
                menu,  // Send updated menu data
                { headers: { Authorization: `Bearer ${aToken}` } }
            );

            if (status === 200) {
                toast.success("Menu updated successfully.");
            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    };
    const deleteMenu = async (menuId) => {
        try {
            const { status } = await axios.delete(`${BackendUrl}/admin/menus/${menuId}`, { headers: { Authorization: `Bearer ${aToken}` } });
            if (status === 200) {
                toast.success("Menu deleted successfully.");
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    };
    const getMenuById = async (id) => {
        try {
            if (!id) return toast.error("Menu ID is missing.");
            const { status, data } = await axios.get(`${BackendUrl}/admin/menus/${id}`, { headers: { Authorization: `Bearer ${aToken}` } });
            if (status === 200) {
                return data.menu;
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
    }
    const getAllOrders = async () => {
        try {
            const { data, status } = await axios.get(`${BackendUrl}/admin/orders`, { headers: { Authorization: `Bearer ${aToken}` } })
            if (status === 200)
                setOrders(data)

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }

    }
    const updateOrderStatus = async (query, id) => {
        try {
            const { data, status } = await axios.put(`${BackendUrl}/admin/orders/${id}/${query}`, {}, { headers: { Authorization: `Bearer ${aToken}` } })
            if (status === 200)
                setOrders(data)
            toast.success(`Order status updated to ${query}`);

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
        finally {
            getAllOrders()
        }
    }
    const paymentCompleted = async (id) => {
        try {
            const { data, status } = await axios.put(`${BackendUrl}/admin/orders/${id}/payment`, {}, { headers: { Authorization: `Bearer ${aToken}` } })
            if (status === 200)
                setOrders(data)
            toast.success(`Order payment is done.`)

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong.");
            } else if (error.request) {
                toast.error("No response from the server. Please try again later.");
            } else {
                toast.error(`Error: ${error.message}`);
            }
        }
        finally {
            getAllOrders()
        }
    }
    const value = {
        aToken, setAToken, BackendUrl, getAllMenus, menus, addMenu, updateMenu, deleteMenu, getMenuById
        , orders, getAllOrders, updateOrderStatus, paymentCompleted
    }
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}


export default AdminContextProvider