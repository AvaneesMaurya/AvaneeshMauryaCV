import './Resume.css';
export default function Programing() {
  const value = [
    { id: 1, text: 'AWS', percentage: 80 },
    { id: 2, text: 'Microsoft Azure', percentage: 80 },
    { id: 3, text: 'Java', percentage: 65 },
    { id: 4, text: 'Jakarta enterprise (j2EE)', percentage: 70 },
    { id: 5, text: ' React.Js', percentage: 85 },
    { id: 6, text: ' HTML', percentage: 90 },
    {
      id: 7,
      text: 'CSS',
      percentage: 70,
    },
    { id: 8, text: 'Linux', percentage: 65 },
  ];
  return (
    <>
      <div>
        <div className='row'>
          {value.map((item) => {
            return (
              <div key={item.id} className='col-lg-6 col-mg-6 col-sm-12 my-2'>
                <span className='language'>{item.text}</span>
                <div className='progress-some'>
                  <div
                    className='progress-new'
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
