import {MagnifyingGlass} from 'react-loader-spinner'
import {Spinner} from './Loading.styled'

const Loading = () => {
  return (
   <Spinner>
     <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{
            borderRadius: "50%",
            boxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            WebkitBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            MozBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
          }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = '#fff'
          color = 'rgba(0, 0, 0)'
          
        /> 
    </Spinner>
  )
}

export default Loading
