
export default function Usr({usr}) {
    const {name, email} = usr
  return (
    <div className="bg-slate-200 m-2 p-4">
        <p className="text-xl font-semibold">User:{name}</p>
        <p>Email:{email}</p>
    </div>
    
  )
}
