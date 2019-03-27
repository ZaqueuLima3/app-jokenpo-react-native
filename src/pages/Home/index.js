import React, { Component } from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Player from '~/components/Player';
import Option from '~/components/Opntion';

export default class Home extends Component {
  state = {
    user: 'user',
    userScore: 0,
    userActiveOption: 'https://gazetadebebedouro.com.br/wp-content/uploads/1.jpg',
    userOption: '',

    computer: 'compurer',
    computerScore: 0,
    computerActiveOption: 'https://gazetadebebedouro.com.br/wp-content/uploads/1.jpg',
    computerOption: '',

    pedra: {
      id: 0,
      url: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png',
    },
    papel: {
      id: 1,
      url: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_960_720.png',
    },
    tesoura: {
      id: 2,
      url: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_960_720.png',
    },

    empate: false,
    winner: '',
  };

  activeUserOption = async (option) => {
    this.setState({ userActiveOption: option.url, userOption: option.id });

    await this.activeComputerOption();

    await this.handlePoint();
  };

  activeComputerOption = async () => {
    const {
      pedra, papel, tesoura, computerOption,
    } = this.state;
    const random = Math.floor(Math.random() * 3);

    if (computerOption === random) {
      this.activeComputerOption();
    }

    switch (random) {
      case 0:
        return this.setState({ computerActiveOption: pedra.url, computerOption: pedra.id });
      case 1:
        return this.setState({ computerActiveOption: papel.url, computerOption: papel.id });
      case 2:
        return this.setState({ computerActiveOption: tesoura.url, computerOption: tesoura.id });
      default:
        return this.state;
    }
  };

  handlePoint = async () => {
    const {
      userOption, computerOption, computerScore, userScore,
    } = this.state;

    if (userOption === computerOption) {
      this.setState({ empate: true });
    }

    if (
      (userOption === 0 && computerOption === 1)
      || (userOption === 1 && computerOption === 2)
      || (userOption === 2 && computerOption === 0)
    ) {
      this.setState({ winner: 'Computer win', computerScore: computerScore + 1, empate: false });
    }

    if (
      (computerOption === 0 && userOption === 1)
      || (computerOption === 1 && userOption === 2)
      || (computerOption === 2 && userOption === 0)
    ) {
      this.setState({ winner: 'User win', userScore: userScore + 1, empate: false });
    }
  };

  render() {
    const {
      pedra,
      papel,
      tesoura,
      computer,
      computerScore,
      computerActiveOption,
      user,
      userScore,
      userActiveOption,
      winner,
      empate,
    } = this.state;
    return (
      <View style={styles.component}>
        <Text style={styles.title}>Lets Play</Text>

        <View style={styles.dash}>
          <View style={styles.poiter}>
            <Text style={styles.textScore}>Score</Text>
            <Text style={styles.totScore}>{userScore}</Text>
          </View>

          <View style={styles.panel}>
            <Player whois={user} url={userActiveOption} />
            <Player whois={computer} url={computerActiveOption} />
          </View>

          <View style={styles.poiter}>
            <Text style={styles.textScore}>Score</Text>
            <Text style={styles.totScore}>{computerScore}</Text>
          </View>
        </View>

        <View style={styles.options}>
          <TouchableOpacity onPress={() => this.activeUserOption(pedra)}>
            <Option url={pedra.url} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.activeUserOption(papel)}>
            <Option url={papel.url} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.activeUserOption(tesoura)}>
            <Option url={tesoura.url} />
          </TouchableOpacity>
        </View>
        <View style={styles.winner}>
          {empate ? (
            <Text style={styles.textEmpate}>draw</Text>
          ) : (
            <Text style={styles.textWinner}>{winner}</Text>
          )}
        </View>
      </View>
    );
  }
}
