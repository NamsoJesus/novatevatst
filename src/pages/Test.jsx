import React from 'react';
import { ArrowsUpDownIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/solid';
const Test = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="header h-20   pt-4 border-b-2 border-gray-800">

                <div className="flex justify-between mx-10">
                    <div className="title text-2xl">
                        <h1>Nueva tabla</h1>
                    </div>
                    <div>
                        <button className="w-30 rounded-md bg-blue-400 p-2 text-white text-xl">
                            GUARDAR
                </button>
                    </div>
                </div>
            </div>
            <main className="w-[90%] m-auto">
                <div className="frist-form flex  h-25 mt-5  p-10 border-b-2">
                    <div className="w-1/3 rounded-md border-black space-y-4">
                        <label className="block">
                            Nombre
                    </label>
                        <input placeholder="person" className="w-[90%] border-[1px] p-2 border-slate-300 rounded-md" />
                    </div>
                    <div className="w-2/3 space-y-4">
                        <label className="block">
                            Description
                    </label>
                        <textarea className="w-full h-20 border-[1px] p-2 border-slate-300 rounded-md" placeholder="tabla usada para x y y" />
                    </div>
                </div>
                <div className="second-form ">
                    <div className="title mt-10">
                        <h1 className="text-xl text-black flex justify-start">Atributos</h1>
                    </div>
                    <table className="mt-10 w-full table-fixed ">
                        <tr className="text-sm ">
                            <th className="w-[10%]">
                                <div className=" justify-center items-center flex">
                                    <h4>NOMBRE</h4>
                                    <ArrowsUpDownIcon className=" h-4 w-4 ml-2 " />
                                </div>

                            </th>
                            <th className="w-[10%]">TIPO</th>
                            <th className="w-[30%]">DESCRIPCION</th>
                            <th className="w-[30%]">CONTRAINTS</th>
                            <th className="w-[10%]">DELETE</th>
                        </tr>
                        <tr className="text-center shadow-sm rounded-md ">
                            <td className="p-4">ID</td>
                            <td className="p-4">
                                <div className=" border-[1px] justify-center items-center rounded-md flex border-slate-200">
                                    <h4 className="p-2">DECIMAL</h4>
                                    <div><ChevronDownIcon className=" h-4 w-4 ml-2 " /> </div>
                                </div>
                            </td>
                            <td className="p-4">Atributo para x y y</td>
                            <td className="p-4"> 
                            <div className="w-full rounded-md border-black space-y-4">
                                <input  className="w-[90%] border-[1px] p-2 border-slate-300 rounded-md" />
                            </div></td>
                            <td className="p-4"><button><TrashIcon className=" h-4 w-4 ml-2 " /></button></td>
                        </tr>
                        <tr className="text-center shadow-sm rounded-md">
                            <td className="p-4">Celular</td>
                            <td className="p-4">  <div className=" border-[1px] justify-center items-center rounded-md flex border-slate-200">
                                <h4 className="p-2">CHAR</h4>
                                <div><ChevronDownIcon className=" h-4 w-4 ml-2 " /> </div>
                            </div></td>
                            <td className="p-4">Atributo para x y y</td>
                            <td className="p-4"> <div className="w-full rounded-md border-black space-y-4">
                                <input  className="w-[90%] border-[1px] p-2 border-slate-300 rounded-md" />
                            </div></td>
                            <td className="p-4"><button><TrashIcon className=" h-4 w-4 ml-2 " /> </button></td>
                        </tr>
                    </table>
                </div>
                <div className="thirtd-form">

                </div>
            </main>
        </div>
    );
};

export default Test;