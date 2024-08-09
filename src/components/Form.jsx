import { useContext, useEffect, useState } from "react";
import { InputField } from "./FormFactory";
import { UserContext } from "./UserContext";

export const Form = () => {
  //Esté contexto deve ser usado para mostrar os valores atuais
  const { setInputValues } = useContext(UserContext);
  //Esté contexto deve ser usado para mostrar os valores já salvos
  const {savedValues, setSavedValues } = useContext(UserContext);

  //Para fazer o efeito de mostrar e esconder of inputs
  const [show, setShow] = useState({
    informação: false,
    trabalho: false,
    estudo: false,
    lingua: false,
  });

  //Esté estado só deve ser usado para os valores atuais
  const [inputValue, setInputValue] = useState({
    name: "John stuart",
    phone: "9983234343",
    address: "India ",
    email: "user@gmail.com",
    about: `I'm i front-end developer that is passionated by creating and learning new things`,
    schoolName: "Boston Future",
    studied: "Medicene",
    dateStudy: "",
    companyName: "FreeLancer",
    possition: "Developer",
    responsabilities:
      "Make web sites,maintained they, find solutions for developmente problems and etc",
    started: "",
    ending: "",
    language: "Português",
    Lselector: "A1",
  });
  //Se dentamos adicionar o estado ao contexto dentro da função handleChange o valor do contexto só será atualizado depois de alguma mudança for feita nos input e não quando o estado for atualizado e o componente renderizado
  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Se não usamos useEffect para atualizar o contexto um erro com relação a renderizar o componente e o estado

  useEffect(() => {
    setInputValues(inputValue);
  }, [inputValue, setInputValues]);

  const HandleSaveWork = () => {
    if(!savedValues.work )return ''
    setSavedValues((prevValues) => ({
      ...prevValues,
      work: [...prevValues.work, inputValue],
    }));
      //Estou usando essa função para limpar os inputs que forem relacionados ao button da função

    //Como pode ver abaixo temos duas funções que fazem quasse a mesma coisa, mas a que eu decidir usar é muito mais limpa e principalmente ela não faz com que um erro aconteça, esse erro é a reposição de inputs que deveriam está limpos 
    setInputValue((prevValues) => ({
      ...prevValues,
      companyName: "",
      possition: "",
      responsabilities: "",
      started: "",
      ending: "",
    }));

    // setInputValue({
    //   name: "John stuart",
    //   phone: "9983234343",
    //   address: "India ",
    //   email: "user@gmail.com",
    //   about: `I'm i front-end developer that is passionated by creating and learning new things`,
    //   schoolName: "Boston Future",
    //   studied: "Medicene",
    //   dateStudy: "",
    //   companyName: "",
    //   possition: "",
    //   responsabilities: ``,
    //   started: "",
    //   ending: "",
    //   language : "Português",
    //   Lselector : "A1",
    // });

  };

  const HandleSaveEducation = () => {
    setSavedValues((prevValues) => ({
      ...prevValues,
      education: [...prevValues.education, inputValue],
    }));

    setInputValue((prevValues) => ({
      ...prevValues,
      schoolName: "",      
      studied: "",
      dateStudy: "",
    }));
  };

  const HandleSaveLanguage = () => {
    setSavedValues((prevValues) => ({
      ...prevValues,
      language: [...prevValues.language, inputValue],
    }));
    setInputValue((prevValues) => ({
      ...prevValues,
      language: "",
      Lselector: "",
    }));
  };

  //Essa função é colocada nas cetas e quaando apertado muda o valor da ceta para o contrario do seu valor atual
  const showInputs = (e) => {
    const { id } = e.target;
    setShow((show) => ({
      ...show,
      //Use [] para podemos acessar o item equivalente ao id
      [id]: !show[id],
    }));
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="userInfo">
          <header className="userHeader">
            <h2>Personal information</h2>
            <i
              className={
                show.informação
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              onClick={showInputs}
              id="informação"
            ></i>
          </header>
          <div className={show.informação ? "show" : "hide"}>
            <InputField
              label="Name"
              type={"text"}
              id={"name"}
              placeholder={"Your Name"}
              value={inputValue.name}
              onChange={handleChange}
            />
            <InputField
              label={"Phone"}
              type={"text"}
              id={"phone"}
              placeholder={"Your Phone"}
              value={inputValue.phone}
              onChange={handleChange}
            />
            <InputField
              label={"Address"}
              type={"text"}
              id={"address"}
              placeholder={"Where are you"}
              value={inputValue.address}
              onChange={handleChange}
            />
            <InputField
              label={"Email"}
              type={"text"}
              id={"email"}
              placeholder={"user@gmail.com"}
              value={inputValue.email}
              onChange={handleChange}
            />
            <label htmlFor="about" id="aboutLabel">
              {" "}
              <h2>Tell more about yourself</h2>
              <textarea
                name="aboutText"
                id="about"
                value={inputValue.about}
                onChange={handleChange}
                rows="10"
                cols="50"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="userWorkExperience">
          <header className="userHeader">
            <h2>Work Experience</h2>
            <i
              className={
                show.trabalho
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              onClick={showInputs}
              id="trabalho"
            ></i>
          </header>
          <div className={show.trabalho ? "show" : "hide"}>
            <InputField
              label={"Possition"}
              type={"text"}
              id={"possition"}
              placeholder={"Possition on company"}
              value={inputValue.possition}
              onChange={handleChange}
            />
            <InputField
              label={"Company Name"}
              type={"text"}
              id={"companyName"}
              placeholder={"Company's name"}
              value={inputValue.companyName}
              onChange={handleChange}
            />
            <label htmlFor="responsabilities" id="responsabilitiesLabel">
              {" "}
              <h2>What you did there?</h2>
              <textarea
                name="aboutWork"
                id="responsabilities"
                value={inputValue.responsabilities}
                onChange={handleChange}
                rows="10"
                cols="50"
              ></textarea>
            </label>
            <InputField
              label={"Started"}
              type={"date"}
              id={"started"}
              value={inputValue.started}
              onChange={handleChange}
            />
            <InputField
              label={"Ending"}
              type={"date"}
              id={"ending"}
              value={inputValue.ending}
              onChange={handleChange}
            />
            <div className="saveDiv">
              <button className="saveButton" onClick={HandleSaveWork}>
                save
              </button>
            </div>
          </div>
        </div>
        <div className="userEducation">
          <header className="userHeader">
            <h2>Education</h2>
            <i
              className={
                show.estudo
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              onClick={showInputs}
              id="estudo"
            ></i>
          </header>
          <div className={show.estudo ? "show" : "hide"}>
            <InputField
              label={"School Name"}
              type={"text"}
              id={"schoolName"}
              placeholder={"What is your school name"}
              value={inputValue.schoolName}
              onChange={handleChange}
            />
            <InputField
              label={"Studied"}
              type={"text"}
              id={"studied"}
              placeholder={"What did you studied there?"}
              value={inputValue.studied}
              onChange={handleChange}
            />
            <InputField
              label={"Date of study"}
              type={"date"}
              id={"dateStudy"}
              placeholder={"What is your school name"}
              value={inputValue.dateStudy}
              onChange={handleChange}
            />
            <div className="saveDiv">
              <button className="saveButton" onClick={HandleSaveEducation}>
                save
              </button>
            </div>
          </div>
        </div>
        <div className="userLangueges">
          <header className="userHeader">
            <h2>Langueges</h2>
            <i
              className={
                show.lingua
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
              onClick={showInputs}
              id="lingua"
            ></i>
          </header>
          <div className={show.lingua ? "show" : "hide"}>
            <InputField
              label={"language"}
              type={"text"}
              id={"language"}
              placeholder={"What is the language that you talk?"}
              value={inputValue.language}
              onChange={handleChange}
            />
            <select name="Lselector" id="Lselector" onChange={handleChange}>
              <option value="A1-A2">A1-A2</option>
              <option value="B1-B2">B1-B2</option>
              <option value="C1-C2">C1-C2</option>
            </select>
            <div className="saveDiv">
              <button className="saveButton" onClick={HandleSaveLanguage}>
                save
              </button>
            </div>
          </div>
        </div>

        <div id="buttonId">
          <button>Create</button>
        </div>
      </form>
    </>
  );
};
