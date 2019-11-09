from keras.models import model_from_json
from keras.preprocessing.image import ImageDataGenerator 
import imageio
import numpy as np
from PIL import Image
from keras import backend as K
disease_mapping={0:'Gray Leaf Spot',1:'Corn/Maize Common Rust',2:'Corn/Maize Healthy',3:'Peach Healthy',4:'Peach BActeria Spot'}

#load the model
my_weights_file=open('/home/ubuntu/SJCEHACK/Plant-disease-detection-master/Final.json','r')
json_loaded=my_weights_file.read()
my_weights_file.close()
load_model=model_from_json(json_loaded)
load_model.load_weights('/home/ubuntu/SJCEHACK/Plant-disease-detection-master/Final.h5')


#predict
prediction_images='/home/ubuntu/SJCEHACK/Plant-disease-detection-master/Dataset/Prediction_Dataset'
predict_gen=ImageDataGenerator(rescale=1.0/255)

predict_data=predict_gen.flow_from_directory(prediction_images,target_size=(210,210),class_mode='categorical')

lens=len(predict_data.filenames)
predict=load_model.predict_generator(predict_data,steps=lens)


classif=np.argmax(predict,axis=1)
print('Disease might be '+ str(disease_mapping[classif[0]])+ ' with a probability of ')
print(np.amax(predict,axis=1)[0])

