import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import { messages } from "../../services/utils/data.temp";

type Params = { id: string };

export default function MessagePage() {
  const { id } = useParams<Params>();
  const message = messages.find((message) => message.id === parseInt(id));

  console.log(message);

  if (!message) {
    // throw new Error("Message not found");
    return <>Message not found</>;
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{message.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>{message.content}</h2>

        {message.comments.map((comment, id) => (
          <p key={id}>{comment.content}</p>
        ))}
      </IonContent>
    </>
  );
}
