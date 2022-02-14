import Button from '../common/components/button/Button'

export default function Custom404() {
  return (
    <div>
      <section className='site_width_container'>
        <h1>404 - Page Not Found</h1>
        <Button destination='/'>Return Home &rarr;</Button>
      </section>
    </div>
  )
}
