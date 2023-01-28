import React, { useState } from 'react'
import { useForm } from "react-hook-form"
export default function FormQuestion() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [debt, setDebt] = useState(false);
    const [Ef, setEf] = useState(false);
    return (
        <div className='flex justify-end relative'>
            <div className='p-4 max-w-[50%] mt-4 mr-4 font-semibold text-lg rounded-lg bg-white text-black'>
                <div className='flex flex-col space-y-2'>
                    <label>Age:</label>
                    <input
                        {...register("age", {
                            required: "Age Field is required",
                        })}
                        type="number"
                        className='px-2 rounded-md border-2 border-slate-600'
                    />
                    <label>Family Members:</label>
                    <input
                        {...register("family_member", {
                            required: "Family member Field is required",
                        })}
                        type="number"
                        className='px-2 rounded-md border-2 border-slate-600'
                    />
                    <label>Current Income(K):</label>
                    <input
                        {...register("current_money", {
                            required: "Age Field is required",
                        })}
                        type="number"
                        className='px-2 rounded-md border-2 border-slate-600'
                    />
                    <label>Do you have a Debt?</label>
                    <div>
                        <input
                            {...register("debt", {
                                required: "Debt Field is required"
                            })}
                            type="checkbox"
                            value={debt}
                            onChange={(e) => setDebt(e.target.checked)}
                        />
                    </div>
                    {
                        debt && (
                            <>
                                <label>EMI(K):</label>
                                <input
                                    {...register("emi", {
                                        required: "Emi Field is required",
                                    })}
                                    type="number"
                                    className='px-2 rounded-md border-2 border-slate-600'
                                />
                                <label>Interest(K):</label>
                                <input
                                    {...register("interest", {
                                        required: "Interest Field is required",
                                    })}
                                    type="number"
                                    className='px-2 rounded-md border-2 border-slate-600'
                                />
                            </>
                        )
                    }
                    <label>Others expenses:</label>
                    <input
                        {...register("expenses", {
                            required: "Expenses Field is required",
                        })}
                        type="number"
                        className='px-2 rounded-md border-2 border-slate-600'
                    />
                    <label>Do you have Emergency Fund?</label>
                    <div>
                        <input
                            {...register("emergency_fund", {
                                required: "Emergency_fund Field is required"
                            })}
                            type="checkbox"
                            value={Ef}
                            onChange={(e) => setEf(e.target.checked)}
                        />
                    </div>
                    {
                        Ef && (
                            <>
                                <label>Emergency fund amount:</label>
                                <input
                                    {...register("Emergency_fund_amount", {
                                        required: "Emergency fund amount Field is required",
                                    })}
                                    type="number"
                                    className='px-2 rounded-md border-2 border-slate-600'
                                />
                            </>
                        )
                    }
                    <label>Savings Amount:</label>
                    <input
                        {...register("saving", {
                            required: "Savings field amount Field is required",
                        })}
                        type="number"
                        className='px-2 rounded-md border-2 border-slate-600'
                    />
                    <label>Are your Savings your investment Or both separated:</label>
                    <label htmlFor="field-rain">
                        <input
                            {...register("weather")}
                            type="radio"
                            value="rain"
                            id="field-rain"
                        />
                        Rain
                    </label>
                    <label htmlFor="field-wind">
                        <input
                            {...register("weather")}
                            type="radio"
                            value="wind"
                            id="field-wind"
                        />
                        Lots of wind
                    </label>
                </div>
            </div>
            <div className="absolute border-l-[20px] border-l-white top-[22px]" style={{
                width: "0", height: "0", borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent"
            }} />
        </div>
    )
}
