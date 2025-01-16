import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiShoppingBag, HiUser, HiOutlinePlusSm, HiOutlineMinusSm, HiMenu } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import AllMenu from "../components/AllMenu";
import AddItem from "../components/AddItem";
import UpdateItem from "../components/UpdateItem";
import DeleteItem from "../components/DeleteItem";

const Dashboard = () => {
    const [selectedItem, setSelectedItem] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useNavigate();

    const renderContent = () => {
        switch (selectedItem) {
            case "Dashboard":
                return <div>Welcome to the Dashboard!</div>;
            case "Users":
                return <UserDashboard />;
            case "All menu":
                return <AllMenu />;
            case "Add item":
                return <AddItem />;
            case "Update item":
                return <UpdateItem />;
            case "Delete item":
                return <DeleteItem />;
        }
    };


    const handleSidebarItemClick = (item) => {
        setSelectedItem(item);
        setSidebarOpen(false);
    };

    return (
        <>
            <button
                className={`lg:hidden p-4 text-white absolute ${sidebarOpen ? "hidden" : "z-20"}`} // Ensure z-index is lower when sidebar is open
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <HiMenu size={24} className="mb-4" />
            </button>
            <div className="bg-[#121212] min-h-screen flex w-screen overflow-hidden relative">
                <div className={`lg:flex lg:w-64 p-5 transition-all duration-300 ease-in-out ${sidebarOpen ? "block z-20" : "hidden lg:block"}`}>
                    <Sidebar className="dark">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item icon={HiUser} onClick={() => handleSidebarItemClick("Users")} className='cursor-pointer'>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Collapse
                                    icon={HiShoppingBag}
                                    label="Menu"
                                    renderChevronIcon={(theme, open) => {
                                        const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                        return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />;
                                    }}
                                >
                                    <Sidebar.Item onClick={() => handleSidebarItemClick("All menu")} className='cursor-pointer'>All menu</Sidebar.Item>
                                    <Sidebar.Item onClick={() => handleSidebarItemClick("Add item")} className='cursor-pointer'>Add item</Sidebar.Item>
                                    <Sidebar.Item onClick={() => handleSidebarItemClick("Update item")} className='cursor-pointer'>Update item</Sidebar.Item>
                                    <Sidebar.Item onClick={() => handleSidebarItemClick("Delete item")} className='cursor-pointer'>Delete item</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Item className="cursor-pointer" icon={HiArrowSmRight} onClick={() => navigate("/login")}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item className="cursor-pointer" icon={HiArrowSmRight} onClick={() => navigate("/sign-up")}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>


                <div className="flex-1 pt-5 p-5 text-white lg:ml-64 mt-10">
                    {sidebarOpen ? <div>Dashboard</div> : renderContent()}
                </div>
            </div>
        </>
    );
};


export default Dashboard;
