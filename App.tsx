import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const mainBgColor = 'rgb(255,255,255)';

const App: FC<undefined> = () => {
  // Helpers

  const generateRandomColor = (): string => {
    //pick a "red" from 0 - 255
    const r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    const g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  const generateColourOptions = (numOfOptions?: number): string[] => {
    const options: string[] = [];
    const count = numOfOptions || 3;
    for (let i = 0; i < count; i++) {
      options.push(generateRandomColor());
    }
    return options;
  };
  const pickRandomColour = (options: string[]) =>
    options[Math.floor(Math.random() * options.length)];

  // State

  const [colourOptions, setColourOptions] = useState<string[]>(generateColourOptions());
  const [pickedColour, setPickedColour] = useState<string>(pickRandomColour(colourOptions));
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Handlers

  const handleOptionPressed = (opt: string): void => {
    const isGuess = opt === pickedColour;
    let updated;
    if (!isGuess) {
      updated = colourOptions.map((co) => {
        if (co === opt) {
          return mainBgColor;
        }
        return co;
      });
    } else {
      updated = colourOptions.map(() => opt);
    }
    setColourOptions(updated);
    setGameOver(isGuess);
  };
  const handleRetry = (numOfOptions = 3) => {
    const newSet = generateColourOptions(numOfOptions);
    setColourOptions(newSet);
    setPickedColour(pickRandomColour(newSet));
    setGameOver(false);
  };

  // UI
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 120,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 32 }}>THE RGB COLOR GUESSING GAME</Text>

      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Pressable
          style={{
            width: 150,
            height: 50,
            backgroundColor: 'gold',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}
          onPress={() => handleRetry(3)}
        >
          <Text>Easy</Text>
        </Pressable>
        <Pressable
          style={{
            width: 150,
            height: 50,
            backgroundColor: 'indianred',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}
          onPress={() => handleRetry(6)}
        >
          <Text>Hard</Text>
        </Pressable>
      </View>

      {!gameOver ? (
        <Text style={{ fontSize: 28, marginVertical: 20 }}>{pickedColour.toUpperCase()}</Text>
      ) : (
        <View
          style={{
            backgroundColor: pickedColour,
            width: 300,
            height: 70,
          }}
        >
          <Text style={{ textAlign: 'center', paddingVertical: 10, fontSize: 28 }}>
            {pickedColour}
          </Text>
        </View>
      )}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: 300,
        }}
      >
        {!gameOver ? (
          colourOptions.map((opt: string, index: number) => {
            return (
              <Pressable
                key={`${index}*${opt}`}
                style={{
                  backgroundColor: opt,
                  width: 100,
                  marginVertical: 10,
                  marginHorizontal: 5,
                  height: 80,
                }}
                onPress={() => handleOptionPressed(opt)}
              />
            );
          })
        ) : (
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontSize: 50,
            }}
          >
            Congrats!
          </Text>
        )}
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            width: 120,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
          onPress={() => handleRetry()}
        >
          <Text style={{ fontSize: 28 }}>Retry</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
