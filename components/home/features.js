function Features() {
  return <section>
    <style jsx>{`
      section {
        min-height: 350px;
        background-color: #ffffff;
      }

      @media (max-width: 1000px) {
        section {
          min-height: 250px;
        }
      }

      @media (max-width: 768px) {
        section {
          min-height: 210px;
        }
      }

      @media (max-width: 500px) {
        section {
          min-height: 120px;
        }
      }
    `}</style>
  </section>
}

export default Features
