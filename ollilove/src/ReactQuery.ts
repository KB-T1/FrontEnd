import { useQuery, UseQueryOptions } from "react-query";
import { User } from "./types/user";
import { FamilyMember } from "./types/familyMember";
import { TransferInfo } from "./types/transferInfo";

const userUrl = "http://kbt1-ollilove-user-service:8080/api/"
const transferUrl = "http://kbt1-ollilove-transfer-service:8081/api/"
//UserInfo 가져오기 & 회원가입 관련 query
interface GetUserCondition {
    userName: string;
};

interface UserParams {
    queryKey: [string, { info: GetUserCondition }];
};

async function getUser(params: UserParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(userUrl+'1/');
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const userId = await response.json();
    
    return ({userName:params.queryKey[1].info.userName, userId:userId})
}


export const GetUserInfo = (
    conditions: GetUserCondition,
    ) => {
    return useQuery<User, Error>(
    ["signup", conditions],
    ()=>getUser({queryKey: ["", {info:conditions}]}),
    {
        onSuccess: data => {
            return data
        }
    }
    
    );
}

//FamilyInfo 가져오기 관련 query
interface GetFamilyInfoCondition {
    userId: number;
};

interface FamilyInfoParams {
    queryKey: [string, { info: GetFamilyInfoCondition }];
};

async function getFamily(params: FamilyInfoParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(userUrl);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const familyInfoList = await response.json();
    
    return familyInfoList;
}


export const GetFamilyInfo = (
    conditions: GetFamilyInfoCondition,
    ) => {
    return useQuery<FamilyMember[], Error>(
    ["user", "family", conditions],
    ()=>getFamily({queryKey: ["", {info:conditions}]}),
    {
        onSuccess: data => {
            return data
        }
    })
}

// 송금 내역 관련 query

interface GetTransferListCondition {
    userId: number;
    count: number; // 요청 데이터 개수
};

interface TransferListParams {
    queryKey: [string, { info: GetTransferListCondition }];
};

async function getTransfer(params: TransferListParams) {
    const [, { info }] = params.queryKey;
    const response = await fetch(``);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const TransferList = await response.json();
    
    return TransferList;
}


export const GetTransferList = (
    conditions: GetTransferListCondition,
    ) => {
    return useQuery<TransferInfo[], Error>(
    ["history", "all", conditions],
    ()=>getTransfer({queryKey: ["", {info:conditions}]}),
    {
        onSuccess: data => {
            return data
        }
    }
);
}