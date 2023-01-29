import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import { db } from "../firebase"
import { collection, setDoc } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
export default function FormQuestion() {
    const authent = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [debt, setDebt] = useState(false);
    const [Ef, setEf] = useState(false);
    const [savingInvested, setSavingInvested] = useState("");
    const [stocks, setStocks] = useState([]);
    const [symbol, setSymbol] = useState("");
    const [symbolvalue, setSymbolValue] = useState(0);
    // const fetch = async() => {
    //     const response = await()
    // }
    const [symbolList, setSymbolList] = useState(['CARBORUNIV', 'GRINDWELL', 'WENDT', '539275', 'BSHSL', 'CONTI', '526899', '526081', 'KANELOIL', 'TRANSCHEM', '539470', 'NARMADA', '541999', '532645', '539206', 'MGEL', 'NATHBIOGEN', '538921', 'INDIGO', 'GLOBALVECT', 'SPICEJET', 'JETAIRWAYS', 'TANEJAERO', 'GALPOWTEL', '513309', '506003', '535279', 'NATIONALUM', 'CENTEXT', '539151', '531869', 'HARDWYN', 'MANAKALUCO', 'IMAGICAA', 'WONDERLA', 'APEX', '519500', '531035', 'ENDURANCE', '522207', 'LUMAXTECH', 'KINETICENG', 'AUTOAXLES', '520141', 'LGBBROSLTD', 'ASLIND', 'BOSCHLTD', '531727', 'ZFCVINDIA', 'ZFSTEERING', '538992', 'SUNDRMBRAK', 'MUNJALAU', '513687', '533477', 'AUTOCORP', 'SONACOMS', 'SUNCLAYLTD', 'SINTERCOM', 'FMGOETZE', 'MUNJALSHOW', 'MAHSCOOTER', 'UNOMINDA', 'SUPRAJIT', 'SANDHAR', 'FIEMIND', 'GABRIEL', 'GNA', 'SETCO', '523248', '532933', 'PRECAM', '505893', 'INDNIPPON', 'SHANTIGEAR', 'RICOAUTO', 'PPAP', '539353', '513252', 'CARTRADE', '539402', 'M&M', 'TATAMOTORS', 'TATAMTRDVR', 'ASHOKLEY', 'FORCEMOT', 'SMLISUZU', 'FEDERALBNK', 'HDFCBANK', 'AXISBANK', 'KOTAKBANK', 'INDUSINDBK', 'SURYODAY', 'DHANBANK', 'SOUTHBANK', 'ICICIBANK', 'RBLBANK', 'KARURVYSYA', 'BANKINDIA', 'MAHABANK', 'UCOBANK', 'EVEREADY', 'TIMKEN', 'BIMETAL', '531911', 'NIBL', '539398', 'SCHAEFFLER', 'ROLEXRINGS', '530595', '543352', 'HGS', 'NAUKRI', 'FSL'])
    const onSubmit = async (data) => {
        data["symbols"] = stocks
        console.log(authent.docId)
        console.log(data);
        try {
            authent.setLoading(true);
            await setDoc(collection(db, "users", authent.docId), {
                input: data
            })
        }
        catch (err) {
            console.log(err);
        }
        finally {
            authent.setLoading(false);
        }
    }
    const addStock = () => {
        setStocks([...stocks, { symbol, symbolvalue }])
    }
    return (
        <div className='flex justify-end relative'>
            <div className='p-4 max-w-[50%] mt-4 mr-4 font-semibold text-lg rounded-lg bg-white text-black'>
                <div className='flex flex-col space-y-2'>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                        <div>
                            <label className='mr-4'>Age:</label>
                            <input
                                {...register("age", {
                                    required: "Age Field is required",
                                })}
                                type="number"
                                className='px-2 rounded-md border-2 border-slate-600'
                            />
                        </div>
                        <div>
                            <label className='mr-4'>Family Members:</label>
                            <input
                                {...register("family_member", {
                                    required: "Family member Field is required",
                                })}
                                type="number"
                                className='px-2 rounded-md border-2 border-slate-600'
                            />
                        </div>

                        <div>
                            <label className='mr-4'>Current Income(K):</label>
                            <input
                                {...register("current_money", {
                                    required: "Age Field is required",
                                })}
                                type="number"
                                className='px-2 rounded-md border-2 border-slate-600'
                            />
                        </div>

                        <div>
                            <label className='mr-4'>Do you have a Debt?</label>
                            <input
                                {...register("debt")}
                                type="checkbox"
                                value={debt}
                                onChange={(e) => setDebt(e.target.checked)}
                            />
                        </div>


                        {
                            debt && (
                                <div className='flex flex-col gap-4'>
                                    <div className='flex'>
                                        <label className='mr-4'>EMI(K):</label>
                                        <input
                                            {...register("emi", {
                                                required: "Emi Field is required",
                                            })}
                                            type="number"
                                            className='px-2 rounded-md border-2 border-slate-600'
                                        />
                                    </div>
                                    <div className='flex'>


                                        <label className='mr-4'>Interest(K):</label>
                                        <input
                                            {...register("interest", {
                                                required: "Interest Field is required",
                                            })}
                                            type="number"
                                            className='px-2 rounded-md border-2 border-slate-600'
                                        />
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            <label className='mr-4'>Others expenses:</label>
                            <input
                                {...register("expenses", {
                                    required: "Expenses Field is required",
                                })}
                                type="number"
                                className='px-2 rounded-md border-2 border-slate-600'
                            />
                        </div>
                        <div>
                            <label className='mr-4'>Do you have Emergency Fund?</label>
                            <input
                                {...register("emergency_fund")}
                                type="checkbox"
                                value={Ef}
                                onChange={(e) => setEf(e.target.checked)}
                            />
                        </div>
                        {
                            Ef && (
                                <div className='flex'>
                                    <label className='mr-4'>Emergency fund amount:</label>
                                    <input
                                        {...register("Emergency_fund_amount", {
                                            required: "Emergency fund amount Field is required",
                                        })}
                                        type="number"
                                        className='px-2 rounded-md border-2 border-slate-600'
                                    />
                                </div>
                            )
                        }
                        <div>
                            <label className='mr-4'>Savings Amount:</label>
                            <input
                                {...register("saving", {
                                    required: "Savings field amount Field is required",
                                })}
                                type="number"
                                className='px-2 rounded-md border-2 border-slate-600'
                            />
                        </div>

                        <label className='mr-4'>Are your Savings your investment Or both separated:</label>
                        <div className="flex flex-col" onChange={(e) => setSavingInvested(e.target.value)}>
                            <label className='mr-4' htmlFor="yes">
                                <input
                                    {...register("Saving_Invested")}
                                    type="radio"
                                    value="yes"
                                    id="yes"

                                />
                                Yes
                            </label>
                            <label className='mr-4' htmlFor="separated">
                                <input
                                    {...register("Saving_Invested")}
                                    type="radio"
                                    value="separated"
                                    id="separated"
                                />
                                separated
                            </label>
                            <label htmlFor="no">
                                <input
                                    {...register("Saving_Invested")}
                                    type="radio"
                                    value="no"
                                    id="no"
                                />
                                no
                            </label>
                        </div>
                        <div>
                            {
                                stocks.map((e) => (
                                    <div>
                                        <div>{e.symbol}</div>
                                        <div>{e.symbolvalue}</div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            savingInvested == "yes" &&
                            (
                                <div className='flex'>
                                    <select
                                        value={symbol} onChange={(e) => setSymbol(e.target.value)}>

                                        {symbolList?.map((db) => (
                                            <option>{db}</option>
                                        ))}
                                    </select>
                                    <input
                                        value={symbolvalue} onChange={(e) => setSymbolValue(e.target.value)} />
                                    <button onClick={addStock}>+ Add</button>
                                </div>
                            )
                        }
                        <input type="submit" value="Click" className="transtion duration-300 focus:bg-violet-700 py-2 px-12 text-xl text-white bg-violet-500 rounded-2xl" />
                    </form>
                </div>
            </div>
            <div className="absolute border-l-[20px] border-l-white top-[22px]" style={{
                width: "0", height: "0", borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent"
            }} />
        </div>
    )
}