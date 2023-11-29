// Controller
import { useEffect, useState } from 'react';
import auth from '@/data/authData.json'
import { deleteAuthData, insertAuthData, updateAuthData } from './authModel';

export default function useController(){
    const [data, setData] = useState<IDataItem[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [openModal, setOpenModal] = useState(false)
    const [openDetail, setOpenDetail] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedItem, setSelectedItem] = useState<IDataItem | undefined>()
    const limit = 8

    useEffect(()=>{
        const offset = (page - 1) * limit;
        setData(auth.slice(offset, page*limit));
    },[page])

    useEffect(()=>{
        setTotalPage(Math.ceil(auth.length / limit))
    },[])

    const changePage = (p:number) => {
        setPage(p)
    }

    const openModalCreate = () => {
        setOpenModal(true)
    }
 
    const openModalUpdate = (item: IDataItem) => {
        setOpenModal(true)
        setSelectedItem(item)
    }

    const closeModal = () => {
        setOpenModal(false)
        setSelectedItem(undefined)
    }

    const openModalDetail = (item: IDataItem) => {
        setOpenDetail(true)
        setSelectedItem(item)
    }

    const closeModalDetail = () => {
        setOpenDetail(false)
        setSelectedItem(undefined)
    }

    const openModalDelete = (item: IDataItem) => {
        setOpenDelete(true)
        setSelectedItem(item)
    }

    const closeModalDelete = () => {
        setOpenDelete(false)
        setSelectedItem(undefined)
    }

    const saveData = () => {
        if(selectedItem?.id){
            updateAuthData(selectedItem.id, selectedItem)
        }else if(selectedItem){
            const body = {id: Date.now(), ...selectedItem}
            insertAuthData(body)
        }

        closeModal()
    }

    const deleteData = () => {
        if(selectedItem?.id){
            deleteAuthData(selectedItem.id)
        }

        closeModalDelete()
    }

    const paginationSchema = {
        page,
        totalPage,
        changePage
    }

    return {
        data,
        paginationSchema,
        selectedItem,
        openModalCreate,
        openModalUpdate,
        closeModal,
        openModal,
        saveData,
        openDetail,
        openModalDetail,
        closeModalDetail,
        openDelete,
        openModalDelete,
        closeModalDelete,
        deleteData
    }
}

export interface IDataItem {
    id?: number;
    username: string;
    password: string;
    role: string;
}