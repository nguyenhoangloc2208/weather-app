import Paper from "../../../../components/Paper/Paper";

export default function OrthersSetting() {
    return(
        <Paper className="mt-5 px-0">
            <div className="px-4 mb-2">
                <span className="font-thin text-black">Orthers Setting</span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <span>Dark mode</span>
                    <input className="toggle" type="checkbox" />
                </div>
            </div>
        </Paper>
    )
}