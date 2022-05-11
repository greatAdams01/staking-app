import { ConnectButton } from 'web3uikit'

const Header = () => {
  return (
    <div className='container mt-9'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold'>SirInu</h3>
      <ConnectButton moralisAuth={false} />
      </div>
    </div>
    )
}

export default Header