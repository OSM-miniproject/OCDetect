"use client";
import WebcamControl from "@/components/WebcamControl";
import "../../globals.css";
const Treatment = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-4 py-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Treatment for OCD</h1>
    <WebcamControl />
    <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
      Learn about the most effective treatments for Obsessive-Compulsive Disorder (OCD), including therapies, medications, and lifestyle modifications to help manage symptoms and improve your well-being.
    </p>

    <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full max-w-6xl">
      {/* Cognitive Behavioral Therapy (CBT) Video */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cognitive Behavioral Therapy (CBT)</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Jz55Uk9EH6U"
          title="Cognitive Behavioral Therapy for OCD"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="text-lg text-gray-700 mt-4 mb-4">
          Cognitive Behavioral Therapy (CBT) is the most effective therapy for OCD. It focuses on identifying and changing negative thought patterns and behaviors. A key aspect of CBT is Exposure and Response Prevention (ERP), where individuals are gradually exposed to feared situations and prevented from performing compulsive behaviors.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Helps individuals challenge irrational thoughts and develop healthier coping mechanisms.</li>
          <li>ERP helps reduce OCD symptoms by preventing compulsive actions in response to obsessions.</li>
          <li>CBT is usually provided by trained therapists and can be delivered in-person or online.</li>
        </ul>
      </div>

      {/* Exposure and Response Prevention Therapy Video */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exposure and Response Prevention Therapy</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/jYRlAW9KdBI"
          title="Exposure and Response Prevention Therapy for OCD"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="text-lg text-gray-700 mt-4 mb-4">
          Exposure and Response Prevention (ERP) is a key component of Cognitive Behavioral Therapy (CBT) for OCD. This therapy involves gradually exposing individuals to situations that trigger their obsessions, while preventing the accompanying compulsive behavior. Over time, this helps reduce anxiety and teaches individuals how to manage their fears without resorting to compulsions.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Helps individuals confront their fears in a controlled, gradual way.</li>
          <li>Reduces reliance on compulsive behaviors to cope with anxiety.</li>
          <li>Can significantly reduce OCD symptoms when practiced consistently.</li>
        </ul>
      </div>

      {/* Voice Meditation for OCD Video */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Voice Meditation for OCD</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dPvrwa95tEc"
          title="Voice Meditation for OCD"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="text-lg text-gray-700 mt-4 mb-4">
          Voice meditation for OCD is a powerful tool to help individuals calm their minds and reduce the impact of obsessive thoughts. Meditation encourages mindfulness and self-awareness, allowing individuals to distance themselves from intrusive thoughts and avoid compulsive behaviors.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Helps individuals focus on the present moment and reduce anxiety.</li>
          <li>Improves emotional regulation and helps break the cycle of OCD.</li>
          <li>Regular meditation practice can enhance overall mental well-being.</li>
        </ul>
      </div>
    </div>

    {/* Educational Content below videos */}
    <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full max-w-6xl mt-12">
      {/* Medications */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medications for OCD</h2>
        <p className="text-lg text-gray-700 mb-4">
          Medications are often used in conjunction with therapy to help manage OCD symptoms. The most commonly prescribed medications are Selective Serotonin Reuptake Inhibitors (SSRIs), which increase serotonin levels in the brain and can help reduce symptoms.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>SSRIs like fluoxetine (Prozac), sertraline (Zoloft), and fluvoxamine (Luvox) are commonly prescribed for OCD.</li>
          <li>Other medications, like tricyclic antidepressants (e.g., clomipramine), may be used for severe cases.</li>
          <li>Medication may be prescribed by a psychiatrist or doctor after careful evaluation.</li>
        </ul>
      </div>

      {/* Mindfulness and Meditation */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mindfulness and Meditation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Mindfulness and meditation techniques can help individuals with OCD by promoting awareness of thoughts and emotions without judgment. Practicing mindfulness can reduce stress and improve emotional regulation.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Mindfulness meditation helps individuals remain present and reduce the impact of obsessive thoughts.</li>
          <li>Regular practice can help reduce anxiety and improve emotional resilience.</li>
          <li>Guided meditation sessions can be done daily to support ongoing treatment.</li>
        </ul>
      </div>

      {/* Support Groups */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support Groups and Peer Support</h2>
        <p className="text-lg text-gray-700 mb-4">
          Joining support groups can provide individuals with OCD a sense of community and understanding. Support groups allow people to share their experiences, learn coping strategies, and gain encouragement from others facing similar challenges.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Online and in-person support groups are available for individuals with OCD.</li>
          <li>Peer support offers emotional validation and helps reduce stigma surrounding OCD.</li>
          <li>Support groups are often facilitated by mental health professionals or experienced group leaders.</li>
        </ul>
      </div>

      {/* Family Therapy */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Family Therapy and Education</h2>
        <p className="text-lg text-gray-700 mb-4">
          Family therapy can be an essential part of OCD treatment. Educating family members about OCD and involving them in therapy can help create a supportive environment for individuals with OCD and strengthen their coping strategies.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Family members can play a key role in reinforcing treatment goals and supporting the individual.</li>
          <li>Therapists may work with family members to address the impact of OCD on relationships and daily life.</li>
          <li>Educational resources for families can enhance understanding and reduce misunderstandings about OCD.</li>
        </ul>
      </div>

      {/* Lifestyle Modifications */}
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lifestyle Modifications</h2>
        <p className="text-lg text-gray-700 mb-4">
          In addition to formal treatments, lifestyle changes can help individuals manage OCD. Regular exercise, healthy eating, and good sleep hygiene can help reduce the intensity of symptoms and improve overall well-being.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Physical exercise helps reduce anxiety and improve mood, which can alleviate OCD symptoms.</li>
          <li>Sleep plays a crucial role in mental health; improving sleep habits can lessen OCD triggers.</li>
          <li>Managing stress through relaxation techniques can help prevent obsessive thoughts and compulsive behaviors.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Treatment;
