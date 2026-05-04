import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let fetchUser = createAsyncThunk("user-slice/fetchUser", async (data, thunkAPI) => {
    try {
        let res = await fetch("https://api.github.com/users")
        let resData = await res.json()
        return resData
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

export let getOneUSer = createAsyncThunk("user-slice/getOneUser", async (data, thunkAPI) => {
    try {
        console.log(data)
        let res = await fetch(`https://api.github.com/users/${data.id}`)
        let resData = await res.json()
        return resData
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)
let userSlice = createSlice({
    name: "user-slice",
    initialState: {
        users: [],
        oneUser: null,
        loading: false, count: 0
    },
    reducers: {
        increaseCount: (state, action) => {
            state.count += 1
        },
        decreaseCount: (state, action) => {
            state.count -= 1
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => { state.loading = true })
            .addCase(fetchUser.rejected, (state, action) => { state.loading = false })
            .addCase(fetchUser.fulfilled, (state, action) => { state.loading = false; state.users = action.payload })
            .addCase(getOneUSer.pending, (state, action) => { state.loading = true })
            .addCase(getOneUSer.rejected, (state, action) => { state.loading = false })
            .addCase(getOneUSer.fulfilled, (state, action) => { state.loading = false; state.oneUser = action.payload })



    }
})
export { fetchUser }

export let { increaseCount, decreaseCount } = userSlice.actions

export default userSlice.reducer;