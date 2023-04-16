import React, { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import config from "../config/config";
import Dashboard from "../components/dashboard/Dashboard";
import AddUser from "../components/users/add";
import UserData from "../components/users/data";
import AddCategories from "../components/categories/add";
import CatagoriesData from "../components/categories/data";
import AddBanner from "../components/banner/add";
import Login from "../components/login/login";
import BannerData from "../components/banner/data";
import AddCoupons from "../components/coupons/add";
import CouponsData from "../components/coupons/data";
import AddDelivery from "../components/delivery/add";
import DeliveryData from "../components/delivery/data";
import AddVendors from "../components/vendors/add";
import VendorsData from "../components/vendors/data";
import AddProducts from "../components/products/add";
import ProductsData from "../components/products/data";
import OrderData from "../components/orders/data";
import TransactionData from "../components/transaction/data";
import Payouts from "../components/transaction/payout";
import AddPayment from "../components/payment/add";
import PaymentData from "../components/payment/data";
import AddFaq from "../components/subCategory/add";
import FaqData from "../components/subCategory/data";
import SupportData from "../components/support/data";
import Applications from "../components/setting/application";
import System from "../components/setting/system";
import EditVendors from "../components/vendors/edit";
import EditDelivery from "../components/delivery/edit";
import Hello from "../components/hello";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import ProtectedRoute from "../ProtectedRoute";
import PublicRoute from "../PublicRoute";
import PageNotFound from "../PageNotFound";
const RouterComponent = () => {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={`${config.baseUrl}loading`} element={<Loading />} />
          <Route
            path={`${config.baseUrl}dashboard`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={`${config.baseUrl}`} element={<PublicRoute isAuthenticated={isAuthenticated}><Login /></PublicRoute>} />
          <Route
            path={`${config.baseUrl}add-user`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}user-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UserData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-categories`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}categories-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CatagoriesData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-banner`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddBanner />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}banner-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <BannerData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-coupons`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddCoupons />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}coupons-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CouponsData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-delivery`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddDelivery />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}delivery-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DeliveryData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-vendors`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddVendors />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}vendors-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <VendorsData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-products`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}products-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ProductsData />
              </ProtectedRoute>
            }
          />
          <Route path={`${config.baseUrl}order-data`} element={<OrderData />} />
          <Route
            path={`${config.baseUrl}transaction-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <TransactionData />
              </ProtectedRoute>
            }
          />
          <Route path={`${config.baseUrl}payouts`} element={<Payouts />} />
          <Route
            path={`${config.baseUrl}add-payment`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddPayment />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}payment-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PaymentData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}add-faq`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddFaq />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}faq-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <FaqData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}support-data`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <SupportData />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}application`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Applications />
              </ProtectedRoute>
            }
          />
          <Route path={`${config.baseUrl}system`} element={<System />} />
          <Route
            path={`${config.baseUrl}edit-vendors`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditVendors />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${config.baseUrl}edit-delivery`}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditDelivery />
              </ProtectedRoute>
            }
          />
          <Route path={`${config.baseUrl}hello`} element={<Hello />} />
      <Route path="*" element={<PageNotFound />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
};
export default RouterComponent;
